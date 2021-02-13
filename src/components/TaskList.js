import React from "react";
import TemporaryDrawer from "./TemporaryDrawer";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//import DoneIcon from "@material-ui/icons/Done";
//import AlarmOnIcon from "@material-ui/icons/AlarmOn";
//import TimelapseIcon from "@material-ui/icons/Timelapse";
import Icon from "@material-ui/core/Icon";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    const todos = [
      {
        description: "First task, this is an example",
        responsible: {
          name: "Santiago Carrillo",
          email: "sancarbar@gmail",
        },
        status: "ready",
        dueDate: 156464645646,
      },
      {
        description: "Learn to program in ReactJS",
        responsible: {
          name: "Eduard Jimenez",
          email: "eduardjimez@gmail",
        },
        status: "completed",
        dueDate: 156464645646,
      },
      {
        description: "Learn how to program better",
        responsible: {
          name: "Eduard Jimenez",
          email: "eduardjimez@gmail",
        },
        status: "in_progress",
        dueDate: 156464645646,
      },
    ];
    const status = {
      completed: "check",
      ready: "alarm_on",
      in_progress: "query_builder",
    };
    this.state = { todos, status };
  }

  render() {
    return (
      <div>
        <TemporaryDrawer />{" "}
        {this.state.todos.map((todo, index) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Card
                style={{
                  marginBottom: "12px",
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {" "}
                    {todo.description}{" "}
                  </Typography>{" "}
                  <Typography color="textSecondary">
                    Name: {todo.responsible.name}{" "}
                  </Typography>{" "}
                  <Typography color="textSecondary">
                    Email: {todo.responsible.email}{" "}
                  </Typography>{" "}
                  <Typography color="secondary">
                    Status: {todo.status + " "}{" "}
                    <Icon> {this.state.status[todo.status]} </Icon>{" "}
                  </Typography>{" "}
                  <Typography> Date: {todo.dueDate} </Typography>{" "}
                </CardContent>{" "}
              </Card>{" "}
            </div>
          );
        })}{" "}
      </div>
    );
  }
}

export default TaskList;
