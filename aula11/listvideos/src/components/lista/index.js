import React, { Component } from 'react';

import { Listavideo } from './styles'
import { Item } from './styles'

class Lista extends Component {
    render(){
        return(
            <>
                <Listavideo>
                    <Item>                        
                        <div>
                            <h2>Os piores 5 DEFEITOS de um programador</h2>
                        </div>
                    </Item>
                    <Item>                        
                        <div>
                            <h2>Os piores 5 DEFEITOS de um programador</h2>
                        </div>
                    </Item><Item>                        
                        <div>
                            <h2>Os piores 5 DEFEITOS de um programador</h2>
                        </div>
                    </Item><Item>                        
                        <div>
                            <h2>Os piores 5 DEFEITOS de um programador</h2>
                        </div>
                    </Item><Item>                        
                        <div>
                            <h2>Os piores 5 DEFEITOS de um programador</h2>
                        </div>
                    </Item>
                </Listavideo>
            </>
        )
    }
}

export default Lista