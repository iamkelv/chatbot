class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage
    this.setState = setStateFunc
    this.createClientMessage = createClientMessage
  }
  handleOptions = (options) => {
    const message = this.createChatBotMessage(
      'How can I help you? Below are some possible options.',
      {
        widget: 'overview',
        loading: true,
        terminateLoading: true,
        ...options,
      },
    )

    this.addMessageToState(message)
  }

  handleGlobalStats = () => {
    const message = this.createChatBotMessage("Here's our available courses.", {
      widget: 'availableCourses',
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    })

    this.addMessageToState(message)
  }

  handleAbout = () => {
    const message = this.createChatBotMessage("Here's the is brief about FUW", {
      widget: 'about',
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    })

    this.addMessageToState(message)
  }

  handleDeptandUnits = () => {
    const message = this.createChatBotMessage(
      "Here's are our available department and units",
      {
        widget: 'departments',
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      },
    )

    this.addMessageToState(message)
  }
  handleRegistration = () => {
    const message = this.createChatBotMessage(
      "Here's the pregistration process",
      {
        widget: 'registrationProcess',
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      },
    )

    this.addMessageToState(message)
  }

  handleContact = () => {
    const message = this.createChatBotMessage(
      'Call 1999 for Trilingual Health Assistance.',
      {
        widget: 'emergencyContact',
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      },
    )

    this.addMessageToState(message)
  }

  handleCharges = () => {
    const message = this.createChatBotMessage(
      'To view you school fee charges clik the link below',
      {
        widget: 'charges',
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      },
    )

    this.addMessageToState(message)
  }

  handleLogin = () => {
    const message = this.createChatBotMessage('To login click the link below', {
      widget: 'login',
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    })

    this.addMessageToState(message)
  }
  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }))
  }
}

export default ActionProvider
