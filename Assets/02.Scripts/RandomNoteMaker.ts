import {GameObject, Random, Mathf} from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export enum note{
    Do, Re, Mi, Fa, Sol
}

export default class RandomNoteMaker extends ZepetoScriptBehaviour {

    private noteSound: int;
    
    
    Start() {    

    }

}