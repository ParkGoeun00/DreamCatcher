import { GameObject } from 'UnityEngine'
import { Button } from 'UnityEngine.UI'
import { ButtonClickedEvent } from 'UnityEngine.UI.Button';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class GamePlayUIManager extends ZepetoScriptBehaviour {

    @SerializeField() gamePlayPanel: GameObject;
    @SerializeField() xButton: Button;
    @SerializeField() colorButtons: Button[];

    @Header('PopUp UI')
    @SerializeField() popupUI: GameObject;
    @SerializeField() yButton: Button;
    @SerializeField() nButton: Button;

    Awake(){

    }

    Start(){
        this.InitButtonsListeners();
        this.popupUI.SetActive(false);
    
    }

    InitButtonsListeners(){
        this.xButton.onClick.AddListener(()=>{
            this.popupUI.SetActive(true);
            // 게임 중단
        });

        this.yButton.onClick.AddListener(()=>{
            this.popupUI.SetActive(false);
            this.gamePlayPanel.SetActive(false);
            // 게임 종료
        })

        this.nButton.onClick.AddListener(()=>{
            this.popupUI.SetActive(false);
            // 게임 재개
        });
    }
        

    public LockColorButtons(){
        for(let i=0; i<this.colorButtons.Length; i++){
            this.colorButtons[i].interactable = false;
        }
    }

    public UnlockColorButtons(){
        for(let i=0; i<this.colorButtons.Length; i++){
            this.colorButtons[i].interactable = true;
        }
    }

    public ShowGameUI(){
        this.gamePlayPanel.SetActive(true);
    }

    public HideGameUI(){
        this.gamePlayPanel.SetActive(false);
    }

}