import React from 'react';

import { Download, Trash2 } from 'react-feather';

const Selected = () => {
  return (
    <div className="dv_selected_row">
      <span>1</span> selected
      <ul>
        <li>
          <a href="#!" title="Delete selected">
            <Trash2 width="24" />
          </a>
        </li>
        <li>
          <a href="#!" title="Download selected">
            <Download width="24" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Selected;
