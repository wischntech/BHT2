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
				date='2011 - present'
				iconStyle={{ background: "#c9d75a", color: "#fff" }}
				// icon={<WorkIcon />}
			>
				<h3 className='vertical-timeline-element-title'>Creative Director</h3>
				<h5 className='vertical-timeline-element-subtitle'>Miami, FL</h5>
				<p>
					Creative Direction, User Experience, Visual Design, Project
					Management, Team Leading
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				date='2010 - 2011'
				iconStyle={{ background: "#c9d75a", color: "#fff" }}
				// icon={<WorkIcon />}
			>
				<h3 className='vertical-timeline-element-title'>Art Director</h3>
				<h5 className='vertical-timeline-element-subtitle'>
					San Francisco, CA
				</h5>
				<p>
					Creative Direction, User Experience, Visual Design, SEO, Online
					Marketing
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				date='2008 - 2010'
				iconStyle={{ background: "#c9d75a", color: "#fff" }}
				// icon={<WorkIcon />}
			>
				<h3 className='vertical-timeline-element-title'>Web Designer</h3>
				<h5 className='vertical-timeline-element-subtitle'>Los Angeles, CA</h5>
				<p>User Experience, Visual Design</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				date='2006 - 2008'
				iconStyle={{ background: "#c9d75a", color: "#fff" }}
				// icon={<WorkIcon />}
			>
				<h3 className='vertical-timeline-element-title'>Web Designer</h3>
				<h5 className='vertical-timeline-element-subtitle'>
					San Francisco, CA
				</h5>
				<p>User Experience, Visual Design</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--education'
				date='April 2013'
				iconStyle={{ background: "#cd0000", color: "#fff" }}
				// icon={<SchoolIcon />}
			>
				<h3 className='vertical-timeline-element-title'>
					Content Marketing for Web, Mobile and Social Media
				</h3>
				<h5 className='vertical-timeline-element-subtitle'>Online Course</h5>
				<p>Strategy, Social Media</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--education'
				date='November 2012'
				iconStyle={{ background: "#cd0000", color: "#fff" }}
				// icon={<SchoolIcon />}
			>
				<h3 className='vertical-timeline-element-title'>
					Agile Development Scrum Master
				</h3>
				<h5 className='vertical-timeline-element-subtitle'>Certification</h5>
				<p>Creative Direction, User Experience, Visual Design</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--education'
				date='2002 - 2006'
				iconStyle={{ background: "#cd0000", color: "#fff" }}
				// icon={<SchoolIcon />}
			>
				<h3 className='vertical-timeline-element-title'>
					Bachelor of Science in Interactive Digital Media Visual Imaging
				</h3>
				<h5 className='vertical-timeline-element-subtitle'>Bachelor Degree</h5>
				<p>Creative Direction, Visual Design</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				iconStyle={{ background: "#cd0000", color: "#fff" }}
				// icon={<StarIcon />}
			/>
		</VerticalTimeline>
	</div>
);

export default Timelinex;
