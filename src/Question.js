import React, {Component} from "react";
import Options from "./Option";

class Question extends Component{
	render() {
		const {question, selectedOption, onOptionChange, onSubmit} = this.props;

		return(
			<div className="box">
				<h3>Question {question.id}</h3>
				<h5 className="mt-3">{question.question}</h5>
				<form onSubmit={onSubmit} className="question mt-2">
					<Options
						options={question.options}
						selectedOption={selectedOption}
						onOptionChange={onOptionChange}
					/>
					<button type="submit" className="btn">
						SUBMIT
					</button>
				</form>
				
			</div>
		)
	}
}

export default Question;