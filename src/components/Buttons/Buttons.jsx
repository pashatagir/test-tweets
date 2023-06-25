import { ButtonFollows } from 'components/Style/Style.styled';

export const LoadMoreBtn = ({ onClick }) => (
  <ButtonFollows
    type="button"
    onClick={onClick}
    style={{
      backgroundColor: '#5CD3A8',
    }}
  >
    Load more
  </ButtonFollows>
);
