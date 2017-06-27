import React, { Component } from 'react';

import '../css/Welcome.css';

export default class Welcome extends Component {
  render () {
    return (
      <div className="Welcome">
        <div className="motto">
          <p>頭は間違うことがあっても、<br />血は間違わない。</p>
          <span className="author">中島敦 光と風と夢</span>
        </div>
        <div className="company">
          <span>DNA検査なら、XYZ Inc.</span>
        </div>
      </div>
    )
  }
};


