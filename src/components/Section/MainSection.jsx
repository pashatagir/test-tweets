import { LoadMoreBtn } from 'components/Buttons/Buttons';
import { ListCards } from 'components/ListCards/ListCards';
import { Loader } from 'components/Loader/Loader';
import {
  CardsContainer,
  Navlink,
  SectionContainer,
  Warning,
} from 'components/Style/Style.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchUsers } from 'redux/usersOperations';
import { selectState } from 'redux/usersSelectors';

export const MainSection = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoading, error, items } = useSelector(selectState);

  const [showBtn, setShowBtn] = useState(false);
  const [limit, setLimit] = useState(3);

  const slice = items.slice(0, limit);

  useEffect(() => {
    setShowBtn(true);
    dispatch(fetchUsers());
  }, [dispatch]);

  const onLoadMore = () => {
    setLimit(limit + 3);
    if (limit > items.length - 6) {
      setShowBtn(false);
    }
  };

  const goBackLink = location?.state?.from ?? '/';

  return (
    <>
      <Navlink to={goBackLink}>Go back</Navlink>
      <SectionContainer>
        <CardsContainer>
          {isLoading && !error && <Loader />}
          <ListCards items={slice} />
          {isLoading && <Loader />}
        </CardsContainer>
        {showBtn ? (
          <LoadMoreBtn onClick={onLoadMore} />
        ) : (
          <Warning>Sorry this is the end!</Warning>
        )}
      </SectionContainer>
    </>
  );
};
