// export const addNewTeacher = () => ({});

export const addNewTeacher = ({ name, email }) => {
  return {
    type: "teacher/addNewTeacher",
    payload: {
      name,
      email,
    },
  };
};

// addNewTeacher({name: "Jeroen", email: "jeroen@email.com"})

// returns -->

// {type: "teacher/addNewTeacher", payload:{name: "Jeroen", email: "jeroen@email.com"}}
