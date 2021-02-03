import { takeEvery, select, call, put } from 'redux-saga/effects'
import { fetchImages } from '../api';
import { setImages, setError } from '../actions'
import { IMAGES } from '../constants'

const getPage = state => state.nextPage;

function* handleImagesLoad(){
    try{
        const page = yield select(getPage)
        const images = yield call(fetchImages, page)
        console.log(images)
        // yield put(setImages(images))
    }catch(error){
        yield put(setError(error.toString()))
    }
    
}

export default function* watchImagesLoad(){
    yield takeEvery(IMAGES.LOAD, handleImagesLoad)
}