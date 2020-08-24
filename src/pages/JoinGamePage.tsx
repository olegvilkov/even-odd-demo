import React, { useState, useEffect } from 'react';
import { IGameState } from 'redux/reducers/currentgame/types';
import { connect, ConnectedProps } from 'react-redux';
import { subscribeToGame, unSubscribeFromGame } from 'redux/sagas/currentgame/actions';

import { f7 } from 'framework7-react';
import { Page, List, Navbar, ListInput, ListButton } from 'framework7-react';
import { selectCurrentGameName } from 'redux/reducers/currentgame/selector';

const mapState = (state: IGameState) => ({
    currentUsername: '', // selectUserName(state),
    gameName: selectCurrentGameName(state),
});

const connector = connect(mapState, { subscribeToGame, unSubscribeFromGame });
type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsFromNavigation = {gameId: string};

/**
 * Экран "Присоединиться к игре"
 */
function JoinGamePage ({ currentUsername='', gameName='', gameId='', subscribeToGame, unSubscribeFromGame }: PropsFromRedux & PropsFromNavigation) {

    useEffect(() => {
        subscribeToGame( gameId );
        return ()=>{ unSubscribeFromGame() }
    }, []);

    const [username, setUsername] = useState(currentUsername);

    return (
        <Page loginScreen>
            <Navbar title="Присоединиться к игре" subtitle={gameName} backLink={true}/>
            <List form>
                <ListInput
                label="Имя"
                type="text"
                placeholder="Имя участника"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
                />
            </List>
            <List>
                <ListButton onClick={()=>{ f7.views.main.router.navigate('/game/1') }}>Присоединиться</ListButton>
            </List>
        </Page>
    )
}

export default connector(JoinGamePage)