import React, { Component } from 'react';
import './css/postcomment.css';

class PostComment extends Component {
	render(){
		return(
			<div className="comment-container">
				<div className="full-comment">
					<div className="right comment">
						<p>Spicy jalapeno bacon ipsum dolor amet swine sed laborum, shank pastrami in cillum shankle. Fugiat nostrud duis adipisicing t-bone, salami sed laborum pork loin rump doner. Laborum short ribs consequat, in bresaola andouille spare ribs lorem aliquip adipisicing quis shank proident ham hock. Turducken salami cillum pork jowl nulla aliquip capicola prosciutto nostrud do laboris pancetta cupidatat.</p>
						<p>Buffalo ullamco fugiat, swine veniam aliquip ham hock. Ad est occaecat, nisi minim biltong pariatur non leberkas laboris anim ground round kevin. Hamburger enim deserunt rump lorem mollit, venison spare ribs sunt labore nisi. In aliquip tenderloin dolore consequat. Beef ribs eu alcatra venison biltong lorem dolor bacon. Qui spare ribs ea picanha, laboris aliqua in reprehenderit esse tenderloin sausage.</p>
					</div>
					<div className="author-info">
						<p>Author: Bob Smith</p>
						<p>Created: 1/31/2018</p>
					</div>
					<div className="fl_c" />
				</div>
			</div>
		);
	}
}

export default PostComment;