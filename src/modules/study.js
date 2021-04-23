/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import { produce } from 'immer';

export const initialState = {
  getStudy: [
    {
      id: 0,
      counts: 0,
      level: null,
      likes: 0,
      location: '',
      maxCount: 0,
      mentoRecruiting: null,
      publishedDateTime: '',
      recruiting: true,
      shortDescription: '',
      tags: [],
      title: '',
    },
  ],
  getStudyLoading: false,
  getStudySuccess: false,
  getStudyError: false,
  detailStudy: [
    {
      id: 0,
      title: '',
      shortDescription: '',
      tags: [],
      counts: 0,
      location: '',
      likes: 0,
      maxCount: 0,
      level: null,
      recruiting: true,
      mentoRecruiting: null,
      publishedDateTime: '',
      members: [],
      fullDescription: '',
      open: true,
      question: null,
    },
  ],
  detailStudyLoading: false,
  detailStudySuccess: false,
  detailStudyError: false,
};

export const GET_STUDY_REQUEST = 'GET_STUDY_REQUEST';
export const GET_STUDY_SUCCESS = 'GET_STUDY_SUCCESS';
export const GET_STUDY_FAILURE = 'GET_STUDY_FAILURE';
export const DETAIL_STUDY_REQUEST = 'DETAIL_STUDY_REQUEST';
export const DETAIL_STUDY_SUCCESS = 'DETAIL_STUDY_SUCCESS';
export const DETAIL_STUDY_FAILURE = 'DETAIL_STUDY_FAILURE';

export function getStudyAction(data) {
  return {
    type: GET_STUDY_SUCCESS,
    data,
  };
}

export function getDetailStudyAction(data) {
  return {
    type: DETAIL_STUDY_SUCCESS,
    data,
  };
}

export default function studyReducer(prevState = initialState, action) {
  return produce(prevState, draft => {
    switch (action.type) {
      case GET_STUDY_REQUEST:
        draft.getStudyLoading = true;
        draft.getStudySuccess = false;
        draft.getStudyError = null;
        break;
      case GET_STUDY_SUCCESS:
        draft.getStudyLoading = false;
        draft.getStudySuccess = true;
        draft.getStudy = action.data;
        break;
      case GET_STUDY_FAILURE:
        draft.getStudyLoading = false;
        draft.getStudyError = action.error;
        break;
      case DETAIL_STUDY_REQUEST:
        draft.detailStudyLoading = true;
        draft.detailStudySuccess = false;
        draft.detailStudyError = null;
        break;
      case DETAIL_STUDY_SUCCESS:
        draft.detailStudyLoading = false;
        draft.detailStudySuccess = true;
        draft.detailStudy = action.data;
        break;
      case DETAIL_STUDY_FAILURE:
        draft.detailStudyLoading = false;
        draft.detailStudyError = action.error;
        break;
      default:
        break;
    }
  });
}
