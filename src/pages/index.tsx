import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Container } from '@/components/ui/Container';
import { getFormattedNumber } from '@/helpers/number';
import { api } from '@/services/api';
import { Country } from '@/types/country';
import exportFromJSON from 'export-from-json';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [countries, setCountries] = useState<Country[]>();
  const [countryName, setCountryName] = useState<string>();

  async function getCountries() {
    try {
      const response = await api.get<Country[]>('/all');

      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  const formattedCountries = countries?.filter(country => {
    if (!countryName) {
      return country;
    } else if (
      country.name.official.toLowerCase().includes(countryName?.toLowerCase()!)
    ) {
      return country;
    }
  });

  function handleExportToCSV() {
    return exportFromJSON({
      data: formattedCountries!,
      fileName: 'countries',
      exportType: exportFromJSON.types.csv,
    });
  }

  function handleExportToXLS() {
    return exportFromJSON({
      data: formattedCountries!,
      fileName: 'countries',
      exportType: exportFromJSON.types.xls,
    });
  }

  function handleExportToXML() {
    return exportFromJSON({
      data: formattedCountries!,
      fileName: 'countries',
      exportType: exportFromJSON.types.xml,
    });
  }

  return (
    <Container>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto justify-center items-center">
            <Input
              placeholder="Search country by official name"
              value={countryName}
              onChange={event => setCountryName(event.target.value)}
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 flex space-x-3 items-center">
            <Button onClick={handleExportToCSV} type="button">
              Export to CSV
            </Button>
            <Button color="red" onClick={handleExportToXML} type="button">
              Export to XML
            </Button>
            <Button color="black" onClick={handleExportToXLS} type="button">
              Export to XLS
            </Button>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden md:rounded-lg">
                <div className="grid grid-cols-3 gap-8">
                  {formattedCountries?.map(country => (
                    <div
                      className="col-span-1 relative rounded border border-gray-300 p-2 divide divide-gray-300 flex flex-col justify-between"
                      key={country.name.official}
                    >
                      <h2 className="font-semibold text-xl text-gray-900">
                        {country.name.official}
                      </h2>

                      <ul className="mt-5">
                        <li className="text-gray-600">
                          <span className="font-semibold text-gray-700 mr-2">
                            Região:
                          </span>
                          {country.region}
                        </li>
                        <li className="text-gray-600">
                          <span className="font-semibold text-gray-700 mr-2">
                            Sub-Região:
                          </span>
                          {country.subregion}
                        </li>
                        <li className="text-gray-600">
                          <span className="font-semibold text-gray-700 mr-2">
                            População:
                          </span>
                          {getFormattedNumber(country.population)}
                        </li>
                        <li className="text-gray-600">
                          <span className="font-semibold text-gray-700 mr-2">
                            Area:
                          </span>
                          {getFormattedNumber(country.area)}
                        </li>
                        <li className="text-gray-600 flex flex-row">
                          <span className="font-semibold text-gray-700 mr-2">
                            Fuso horário:
                          </span>
                          <span className="line-clamp-1">
                            {country.timezones.toString()}
                          </span>
                        </li>
                      </ul>
                      <Link
                        href={country.flags.png}
                        className="mt-5 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full"
                      >
                        Visualizar Bandeira
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
