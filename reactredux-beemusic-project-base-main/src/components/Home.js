import './Home.scss'
import {APIURL} from "../Helper";
import axios from "axios";
import {useEffect, useState} from "react";
import AllList from "./AllList";
import FavList from "./FavList";
import PlayList from "./PlayList";
import Actions from "../actions"
import {useDispatch} from "react-redux";

// functional component, FC
// class base component, CC
const Home = () => {
    const [rawSongList, setRawSongList] = useState([])
    // dispatch: useDispatch, mapDispatchToProps
    const sfDispatch = useDispatch()


    // async function add await could make the async to be sync and wait for the function
    // to be used and called then to the next step of sync codes
    // const fetchData = async () => {
    //     console.log('i triggered?')
    //     //async sync
    //     let res = await axios.get(APIURL) //Promise
    //     console.log('get data returned', res.data)
    //     setRawSongList(res.data)

        // .then(res => {
        //     console.log('get data returned',res.data)
        //     setRawSongList(res.data)
        // })
        // .catch(err => console.log('error fetching data', err))

        // // node should be the newest
        // fetch(APIURL)
        //     .then(res => res.json())
        //     .then(res => console.log('returned value',res))

    //no second parameters, each time the function of Home() is refreshed, callback the fetchData,
    // [], mount, render, one time at start, one time at end/unmount
    // [xxx], when there is parameter or parameters in it, change when reaching the parameter


    return <section>
        <button onClick={() => sfDispatch(Actions.SongAction.fetchAllSongs())}>Fetch Songs</button>
        <div className="container">
            <AllList/>
            <FavList/>
            <PlayList/>
        </div>
    </section>
}

export default Home