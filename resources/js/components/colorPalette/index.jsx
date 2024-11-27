import React from 'react';
import colorPalettes from './constants';

const ColorPalette = ({ onChange, value }) => {

    return (
        <div className="row">
            {colorPalettes.map((colorPalette, index) => (
                <div key={`color-${index}`} className="col-md-2">
                    <div className="card p-2">
                        <div className="form-group">
                            <p className="form-control" style={{ background: colorPalette.primary }}>Primary</p>
                            <p className="form-control" style={{ background: colorPalette.secondary }}>Secundary</p>
                            <p className="form-control" style={{ background: colorPalette.accent }}>Accent</p>
                            <p className="form-control" style={{ background: colorPalette.dark }}>Dark</p>
                            <div className='text-center'>
                                <input type="radio" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ColorPalette;