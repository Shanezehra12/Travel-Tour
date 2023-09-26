import "./SignFormStyles.css"

const SignForm = () => {
  return (
    <div className="form-container">
      <h1>Fill the form to travel with us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Contact No." />
        <input placeholder="When are you planning to visit?" />
        <input placeholder="Which tours or events are you most interested in?" />
        <input placeholder="How many people are there?" />
        <textarea placeholder="Anything else we should know?" rows="4"></textarea>
        <textarea placeholder="And last, how did you hear about us?" rows="4"></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SignForm