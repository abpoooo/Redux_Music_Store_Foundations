import './List.scss'
import {useSelector} from "react-redux";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SongRow from "./SongRow";



const FavList = () => {

    let songs = useSelector(state => state.SongReducer.rawSongList)
    return <div className="listContainer">
        <div className="songList">
            <div className="list">
                {/*<FavoriteBorderIcon/>*/}
                <div className="listRow title">Fav list</div>
                <div className="listRow">
                    {
                        songs.filter(s => s.liked).map((s, index) => <SongRow key={index} song={s}/>)
                    }
                </div>
            </div>
        </div>
    </div>
}

export default FavList