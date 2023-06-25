import { LoadMoreBtn } from 'components/Buttons/Buttons';
// import { StatusFilter } from 'components/Filters/Filters';
import { ListCards } from 'components/ListCards/ListCards';
import { Loader } from 'components/Loader/Loader';
import {
  // ButtonFilters,
  CardsContainer,
  Navlink,
  SectionContainer,
  Warning,
} from 'components/Style/Style.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchUsers } from 'redux/usersOperations';
import {
  selectState,
  // selectVisibleUsers
} from 'redux/usersSelectors';

export const MainSection = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoading, error, limit, items } = useSelector(selectState);
  const [showBtn, setShowBtn] = useState(false);
  const [noOfElement, setNoOfElement] = useState(limit);
  const slice = items.slice(0, noOfElement);
  useEffect(() => {
    setShowBtn(true);
    dispatch(fetchUsers());
  }, [dispatch]);

  const onLoadMore = () => {
    setNoOfElement(noOfElement + 3);
    if (noOfElement > items.length - 6) {
      setShowBtn(false);
    }
  };

  // const users = useSelector(selectVisibleUsers);

  // const onSelectFilter = slice => {
  //   return slice.filter(item => !item.isFollower);
  // };

  // const filteredSlice = onSelectFilter(slice);

  const goBackLink = location?.state?.from ?? '/';

  return (
    <>
      <Navlink to={goBackLink}>Go back</Navlink>
      {/* <ButtonFilters>Filters</ButtonFilters> */}
      {/* <StatusFilter /> */}
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
