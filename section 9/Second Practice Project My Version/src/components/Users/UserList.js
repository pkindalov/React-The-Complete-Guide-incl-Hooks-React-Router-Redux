import classes from "./UserList.module.css";
import Card from "../UI/Card";
import cardClasses from "../UI/Card.module.css";

const UserList = ({ usersData }) => {
  return (
    <div className={classes.users}>
      {usersData.map((user) => {
        console.log(user.username);
        return (
          <Card cssClsNames={[cardClasses["card-user__width"]]}>
            <ul className={classes.users}>
              <li className={classes.users}>
                {user.username} {user.age}
              </li>
            </ul>
          </Card>
        );
      })}
    </div>
  );
};

export default UserList;
