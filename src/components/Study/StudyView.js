import React, { useCallback, useEffect } from 'react';
import StudyCard from 'components/Study/Section/StudyCard';
import { useDispatch, useSelector } from 'react-redux';
import { getStudyAction } from 'modules/study';
import axios from 'axios';
import { GridContainer } from 'styles/container';
import { Link } from 'react-router-dom';

const StudyView = () => {
  const dispatch = useDispatch();
  const { getStudy } = useSelector(state => state.study);

  useEffect(() => {
    axios.get(`http://3.34.109.192/study?pageSize=20`).then(response => {
      dispatch(getStudyAction(response.data));
    });
  }, []);

  return (
    <>
      Study Content
      <GridContainer>
        {getStudy?.map(study => {
          return (
            <Link key={study.id} to={`/study/${study.id}`}>
              <StudyCard
                key={study.id}
                title={study.title}
                description={study.shortDescription}
                level={study.level}
                counts={study.counts}
                maxCount={study.maxCount}
                location={study.location}
                tags={study.tags}
                likes={study.likes}
                recruiting={study.recruiting}
                mentoRecruiting={study.mentoRecruiting}
                publishedDateTime={study.publishedDateTime}
              />
            </Link>
          );
        })}
      </GridContainer>
    </>
  );
};

export default StudyView;
