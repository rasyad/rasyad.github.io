'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const SocialMedia = require('../social_media');

const Footer = React.createClass({
    propTypes: {
        content: ResumePropTypes.basics
    },

    render: function () {
        return (
            <footer>
                <div className='row'>
                    <div className='twelve columns'>
                        <SocialMedia ulClass='social-links' profiles={this.props.content.profiles}/>
                        <ul className='copyright'>
                            <li>
                                This site template is developed by&nbsp;
                                <a
                                    href='https://github.com/suddi'
                                    title='Sudharshan Ravindran'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Sudharshan Ravindran
                                </a> from the original design of Ceevee from&nbsp;
                                <a
                                    href='http://www.styleshout.com/'
                                    title='Styleshout'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Styleshout 
                                </a> Modified by&nbsp;
                                <a
                                    href='https://rasyad.github.io'
                                    title='Reno'
                                    target='_blank'>
                                    Reno
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id='go-top'>
                        <a className='smoothscroll' title='Back to Top' href='#home'>
                            <i className='icon-up-open'/>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;
