import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { getCountriesData } from "../../redux/slice/countriesDataSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import { Countries } from "../../types/country";
import { FaSearch } from "react-icons/fa";
const Home = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  useEffect(() => {
    dispatch(getCountriesData());
  }, []);
  const countries = useSelector((state: RootState) => state.countries);
  const mode = useSelector((state: RootState) => state.mode);
  const Search = (value: string) => {};
  return (
    <div
      className={mode.mode ? "font-nunito" : "bg-black text-white font-nunito"}
    >
      <div className="container flex items-center justify-around align-center flex-wrap gap-20 py-10">
        <div className="flex items-center justify-center align-center gap-3">
          <FaSearch classname="text-grey font-light" />
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={(e) => Search(e.target.value)}
          />
        </div>

        <select name="" id="">
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="ocenaia">Oceania</option>
        </select>
      </div>
      <div className="container flex items-center justify-center align-center flex-wrap gap-20 ">
        {countries?.data?.map((e: Countries) => {
          return (
            <Link
              to={e.flag}
              className={
                mode.mode
                  ? "w-60 rounded-t-lg rounded-md h-72 flex flex-wrap drop-shadow-xl"
                  : "bg-grey w-60 rounded-t-lg rounded-md h-72 flex flex-wrap drop-shadow-xl"
              }
              key={e.name.common}
            >
              <img
                src={e.flags.png}
                alt=""
                className="h-40 w-60 rounded-t-lg"
              />
              <div className="flex flex-col p-1">
                <h1 className="py-1 text-lg ml-2 p-0.5 font-bold">
                  {e.name.common}
                </h1>
                <i className="text-sm ml-2 p-0.5">
                  <b>Population : </b>
                  {e.population}
                </i>
                <i className="text-sm ml-2 p-0.5">
                  <b>Region : </b>
                  {e.region}
                </i>
                <i className="text-sm ml-2 p-0.5">
                  <b>Capital : </b>
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
