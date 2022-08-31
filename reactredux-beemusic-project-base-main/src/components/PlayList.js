
import './List.scss'
import {useSelector} from "react-redux";
import SongRow from "./SongRow";

const PlayList = () => {
    let songs = useSelector(state => state.SongReducer.rawSongList)
    return <div className="listContainer">
        <div className="songList">
            <div className="list">
                <div className="listRow title">Play list</div>
                <div className="listRow"></div>
                {
                    songs.filter(s => s.checked).map((s, index) => <SongRow key={index} song={s}/>)
                }
            </div>
        </div>
    </div>
}

export default PlayList