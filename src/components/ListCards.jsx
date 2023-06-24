import { Card } from "./Card";
import { List } from "../styles/Styles.styled";

export const ListCards = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <Card
          key={item.id}
          avatar={item.avatar}
          tweets={item.tweets}
          followers={item.followers}
          user={item.user}
          id={item.id}
          isFollower={item.isFollower}
        />
      ))}
    </List>
  );
};
