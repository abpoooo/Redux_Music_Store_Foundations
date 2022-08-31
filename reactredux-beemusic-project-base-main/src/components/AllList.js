
import './List.scss'
import {useSelector} from "react-redux";
import * as ReactRedux from 'react-redux'
import SongRow from "./SongRow";
console.log(ReactRedux)


const AllList = () => {

    let songs = useSelector(state => state.SongReducer.rawSongList)
    return <div className="listContainer">
        <div className="songList">
            <div className="list">
                <div className="listRow title">All list</div>
                <div className="listRow">
                    {
                        songs.map((s, index) => <SongRow key={index} song={s}/>)
                    }
                </div>
            </div>
        </div>
    </div>
}

export default AllList