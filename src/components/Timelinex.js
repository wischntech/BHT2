import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timelinex = () => (
	<div>
		<VerticalTimeline>
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				contentStyle={{ background: "#cd0000", color: "#fff" }}
				contentArrowStyle={{ borderRight: "7px solid  #c9d75a" }}
				date='2011 - jetzt'
				iconStyle={{ background: "#c9d75a", color: "#fff" }}
				// icon={<WorkIcon />}
			>
				<h3 className='vertical-timeline-element-title'>
					Berger Haustechnik GmbH
				</h3>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit autem
					alias magnam eius, natus nemo?
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				date='2010 - 2011'
				iconStyle={{ background: "#c9d75a", color: "#fff" }}
				// icon={<WorkIcon />}
			>
				<h3 className='vertical-timeline-element-title'>Ereignis 2</h3>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
					maiores illo magni aut labore odit?
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				date='2008 - 2010'
				iconStyle={{ background: "#c9d75a", color: "#fff" }}
				// icon={<WorkIcon />}
			>
				<h3 className='vertical-timeline-element-title'>Ereignis 3</h3>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					doloribus dicta voluptate sint, tenetur culpa.
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				date='2006 - 2008'
				iconStyle={{ background: "#c9d75a", color: "#fff" }}
			>
				<h3 className='vertical-timeline-element-title'>Ereignis 4</h3>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae
					ratione beatae corporis ut corrupti eaque iste natus, nostrum
					reiciendis?
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--education'
				date='April 2013'
				iconStyle={{ background: "#cd0000", color: "#fff" }}
				// icon={<SchoolIcon />}
			>
				<h3 className='vertical-timeline-element-title'>Ereignis 5</h3>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse
					quidem aspernatur temporibus porro quae eius ipsa voluptate iusto
					maxime?
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--education'
				date='November 2012'
				iconStyle={{ background: "#cd0000", color: "#fff" }}
			>
				<h3 className='vertical-timeline-element-title'>Ereignis 6</h3>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ad
					consequuntur, omnis animi earum beatae modi similique! Suscipit est
					repellendus, id nisi doloremque iure possimus!
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--education'
				date='2002 - 2006'
				iconStyle={{ background: "#cd0000", color: "#fff" }}
			>
				<h3 className='vertical-timeline-element-title'>Ereignis 7</h3>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
					doloremque, harum quasi quis necessitatibus consequuntur!
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				iconStyle={{ background: "#cd0000", color: "#fff" }}
				// icon={<StarIcon />}
			/>
		</VerticalTimeline>
	</div>
);

export default Timelinex;
