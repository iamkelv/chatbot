import Options from './Options'

const GeneralOptions = (props) => {
  const options = [
    {
      name: ' Availabl Courses',
      handler: props.actionProvider.handleGlobalStats,
      id: 1,
    },
    {
      name: 'About Federal university wukari',
      handler: props.actionProvider.handleAbout,
      id: 2,
    },
    {
      name: 'Departments and units',
      handler: props.actionProvider.handleDeptandUnits,
      id: 3,
    },
    {
      name: 'School fees Charges',
      handler: props.actionProvider.handleCharges,
      id: 4,
    },

    {
      name: 'Registration Instruction',
      handler: props.actionProvider.handleRegistration,
      id: 6,
    },
    {
      name: "Applicant's Login",
      handler: props.actionProvider.handleLogin,
      id: 7,
    },
    // {
    //   name: '2022/2023 Registration Procedure for Fresh Students',
    //   handler: props.actionProvider.handleAirport,
    //   id: 8,
    // },
  ]
  return <Options options={options} title="Options" {...props} />
}

export default GeneralOptions
