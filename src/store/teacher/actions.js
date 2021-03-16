// export const addNewTeacher = () => ({});

export const addNewTeacher = ({ name, lastName, email }) => {
  return {
    type: "teacher/addNewTeacher",
    payload: {
      name,
      lastName,
      email,
    },
  };
};

// addNewTeacher({name: "Jeroen", email: "jeroen@email.com"})

// returns -->

// {type: "teacher/addNewTeacher", payload:{name: "Jeroen", email: "jeroen@email.com"}}
