import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { getCountriesData } from "../../redux/slice/countriesDataSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import { Countries } from "../../types/country";
const Home = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  useEffect(() => {
    dispatch(getCountriesData());
  }, []);

  const countries = useSelector((state: RootState) => state.countries);
  console.log(countries.data);
  return (
    <div id="home">
      <div className="container flex items-center justify-center align-center flex-wrap gap-20">
        {countries?.data?.map((e: Countries) => {
          return (
            <Link to={e.flag} className="w-60 rounded-t-lg">
              <img
                src={e.flags.png}
                alt=""
                className="h-40 w-60 rounded-t-lg"
              />
              <div className="flex flex-col">
                <h1>{e.name.common}</h1>
                <i>
                  <b>Population:</b>
                  {e.population}
                </i>
                <i>
                  <b>Region:</b>
                  {e.region}
                </i>
                <i>
                  <b>Capital:</b>
                  {e.capital}
                </i>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
