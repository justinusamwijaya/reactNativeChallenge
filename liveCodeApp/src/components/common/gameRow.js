import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { UnMarkedPos, Markedpos } from './index'
import { Mark, losing, winning } from '../../actions'

const style = {
    gameRowStyle: {
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
    }
}

class Row extends Component {

    checkVerticalCondition(value) {
        for( let i = 0; i < value.length; i++ ) {
            value[i] = value[i].split(',')
            if( value.includes( value[i][0] + ',' + (+value[i][1] + 1) ) 
            && value.includes( value[i][0] + ',' + (+value[i][1] + 2) ) ) return true
            value[i] = value[i][0]+','+value[i][1]
        }
        return false
    }

    checkHorizontalCondition(value) {
        for( let i = 0; i < value.length; i++ ) {
            value[i] = value[i].split(',')
            if( value.includes( (+value[i][0] + 1) + ',' + value[i][1] ) 
            && value.includes( (+value[i][0] + 2) + ',' + value[i][1] ) ) return true
            value[i] = value[i][0]+','+value[i][1]
        }
        return false
    }

    checkDiagonalRightCondition(value) {
        for( let i = 0; i < value.length; i++ ) {
            value[i] = value[i].split(',')
            if( value.includes( (+value[i][0] + 1) + ',' + (+value[i][1] + 1) ) 
            && value.includes( (+value[i][0] + 2) + ',' + (+value[i][1] + 2) ) ) return true
            value[i] = value[i][0]+','+value[i][1]
        }
        return false
    }
    
    checkDiagonalLeftCondition(value) {
        for( let i = 0; i < value.length; i++ ) {
            value[i] = value[i].split(',')
            if(value.includes( (+value[i][0] - 1) + ',' + (+value[i][1] - 1) ) 
                && value.includes( (+value[i][0] - 2) + ',' + (+value[i][1] - 2) )) return true
            value[i] = value[i][0]+','+value[i][1]
        }
        return false
    }

    checkWinningCondition(mine, enemy) {
        if(this.checkDiagonalRightCondition(mine) || 
        this.checkHorizontalCondition(mine) || 
        this.checkVerticalCondition(mine) || 
        this.checkDiagonalLeftCondition(mine)) return this.props.winning()
        if(this.checkDiagonalRightCondition(enemy) || 
        this.checkHorizontalCondition(enemy) || 
        this.checkVerticalCondition(enemy) || 
        this.checkDiagonalLeftCondition(enemy)) return this.props.losing()
    }

    renderButton( value, turn ) {
        if( this.props.enemyPos.includes(value) ) {
            return <Markedpos>X</Markedpos>
        } else if ( this.props.myPos.includes(value) ) {
            return <Markedpos>O</Markedpos>
        } else {
            return <UnMarkedPos onPress={()=>{ 
                this.props.Mark( value, turn ) 
                let posMe = this.props.turn = 'myPositions' ? [...this.props.myPos, value] : [...this.props.myPos]
                let posEn = this.props.turn = 'enemyPositions' ? [...this.props.enemyPos, value] : [...this.props.enemyPos]
                this.checkWinningCondition(posMe,posEn)
            }}/>
        }
    }

    render() {
    const { row=0, Mark, enemyPos, myPos, turn } = this.props
    return (
            <View style={style.gameRowStyle}>
                {this.renderButton( row + ',0', turn)}
                {this.renderButton( row + ',1', turn)}
                {this.renderButton( row + ',2', turn)}
            </View>
        )
    }

}

const mapStateToProps = state => {
    return {
        enemyPos: state.game.enemyPositions,
        myPos: state.game.myPositions,
        turn: state.game.turn
    }
}

export const GameRow = connect(mapStateToProps,{ Mark, losing, winning })(Row)