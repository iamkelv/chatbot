import { createChatBotMessage } from 'react-chatbot-kit'
import Overview from './widgets/Overview'
import GlobalStatistics from './widgets/GlobalStatistics'
import LocalStatistics from './widgets/LocalStatistics'
import Contact from './widgets/Contact'
import MedicineDelivery, { Login } from './widgets/MedicineDelivery'
import Departments from './widgets/DeptandUnits'
import AvailablCourses from './widgets/GlobalStatistics'
import AboutFUW from './widgets/LocalStatistics'

const config = {
  // initialMessages: [
  //   createChatBotMessage(
  //     `Hi, I'm here to provide you with latest COVID 19 data to keep you safe!`
  //   )
  // ]
  lang: 'no',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#04668a',
    },
    chatButton: {
      backgroundColor: '#0f5faf',
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm here to provide you and  with latest informatio about Federal university Wukari!`,
    ),
    createChatBotMessage(
      "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
      {
        withAvatar: false,
        delay: 400,
        widget: 'overview',
      },
    ),
  ],
  state: {
    airports: [],
    selectedAirport: { iata: 'OSL', nameCompact: 'Oslo' },
    statsType: '',
    selectedFlightId: '',
    selectedFlight: null,
  },
  customComponents: {},
  widgets: [
    {
      widgetName: 'overview',
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ['messages'],
    },
    {
      widgetName: 'availableCourses',
      widgetFunc: (props) => <AvailablCourses />,
      // mapStateToProps: ["statsType"]
    },
    {
      widgetName: 'departments',
      widgetFunc: (props) => <Departments />,
      // mapStateToProps: ["statsType"]
    },
    {
      widgetName: 'about',
      widgetFunc: (props) => <AboutFUW />,
    },
    {
      widgetName: 'emergencyContact',
      widgetFunc: (props) => <Contact />,
    },
    {
      widgetName: 'charges',
      widgetFunc: (props) => <MedicineDelivery />,
    },
    {
      widgetName: 'registrationProcess',
      widgetFunc: (props) => <Contact />,
    },
    {
      widgetName: 'login',
      widgetFunc: (props) => <Login />,
    },
  ],
}

export default config
