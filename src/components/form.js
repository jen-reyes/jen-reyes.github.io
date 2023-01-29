import React from "react"

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
      name: "",
      email: "",
      message: "",
    }
    this.validateInput = this.validateInput.bind(this)
  }

  validateInput(e) {
    if (e.target.value.length === 0) {
      e.target.style.border = "solid 2px #4feaab"
      e.target.nextElementSibling.style.display = "block"
    } else {
      this.setState({ [e.target.getAttribute("name")]: e.target.value.trim() })
      e.target.style.border = "none"
      e.target.nextElementSibling.style.display = "none"
    }
  }

  render() {
    const { status } = this.state
    return (
      <section className="form-wrapper" data-sal="fade" data-sal-duration="200">
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/mgepbvwa"
          method="POST"
          className="form"
        >
          <label style={{ display: "block" }}>
            Name
            <input
              style={{ display: "block" }}
              type="text"
              name="name"
              onBlur={this.validateInput}
              onChange={e => this.setState({ name: e.target.value })}
              value={this.state.name}
              required
              maxLength="50"
            />
            <span className="required-example">Please enter your name</span>
          </label>

          <label style={{ display: "block" }}>
            Email
            <input
              style={{ display: "block" }}
              type="email"
              name="email"
              onBlur={this.validateInput}
              onChange={e => this.setState({ email: e.target.value.trim() })}
              value={this.state.email}
              required
              maxLength="50"
            />
            <span className="required-example">Please enter a valid email</span>
          </label>

          <label style={{ display: "block" }}>
            Your Message
            <textarea
              style={{ display: "block", width: "100%", height: "100px" }}
              name="message"
              id="message"
              onBlur={this.validateInput}
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}
              required
              maxLength="500"
            ></textarea>
            <span className="required-example">Don't be shy! Drop a line.</span>
          </label>

          {status === "SUCCESS" ? (
            <p className="success">Thanks!</p>
          ) : (
            <button className="btn btn-lg btn-outline-light" type="submit">
              Say Hi
            </button>
          )}
          {status === "ERROR" && (
            <p className="error" style={{ display: "block" }}>
              Ooops! There was an error.
            </p>
          )}
        </form>
      </section>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        this.setState({ name: "" })
        this.setState({ email: "" })
        this.setState({ message: "" })

        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
