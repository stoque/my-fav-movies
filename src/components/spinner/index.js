import React from 'react'
import { css } from 'react-emotion'
import { ClipLoader } from 'react-spinners'

const override = css`
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 20%;
`

const Spinner = ({ loading }) => (
  <ClipLoader
    className={override}
    loading={loading}
  />
)

export default Spinner
