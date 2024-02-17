import Fade from './Fade'
const Hero = () => {
  return (
    <div>
        <Fade>

        <div className="card">
		<div className="imgBox">
			<div className="bark"></div>
			<img src="https://image.ibb.co/fYzTrb/lastofus.jpg"/>
		</div>
		<div className="details">
			<h4 className="color1">You're not a Fossil! (YET)</h4>
			<h4 className="color2 margin">(HAPPY BIRTHDAY)</h4>
			<p>Dear Cintia,</p>
			<p>Let's see...</p>
			<p>You’re never around, you</p>
			<p>dont like the music I’m into, you</p>
			<p>practically ignore my text</p>
			<p>and yet somehow you still</p>
			<p>manage to stuck on my mind.</p>
			<p>How do you do that? :)</p>

			<p className="text-right mt-5">Happy Birthday, Cintia!</p>
			<p className="text-right">Daud</p>
		</div>
	</div>
        </Fade>
    </div>
  )
}

export default Hero