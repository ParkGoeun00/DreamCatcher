import {GameObject} from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import GamePlayUIManager from './GamePlayUIManager'
import RandomNoteMaker from './RandomNoteMaker';

export default class GamePlayManager extends ZepetoScriptBehaviour {
    @SerializeField() gamePlayUIManager : GamePlayUIManager;
    @SerializeField() randomNoteMaker : RandomNoteMaker;
    
    Start() {    


    }

    public GameStart(){
        this.gamePlayUIManager.ShowGameUI();
        
    }


}