import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class MultilineColorChange implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private _inputElement: HTMLTextAreaElement;
    private _inputValue: string;
    private _notifyOutputChanged: () => void;
    private _colorInRgb: string;
    private _heightInLines: number;


    constructor() { }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */

    public onBlur = (event: Event): void => {
        this._inputValue = this._inputElement.value;
        this._notifyOutputChanged();
    };

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        // Add control initialization code
        // this._inputElement = document.createElement("input");
        // console.log(container);
        this._inputElement =  document.createElement("textarea");
        // this._inputElement.setAttribute("type", "textarea");
        this._inputElement.setAttribute("placeholder", "---");
        this._inputElement.setAttribute("class", "textInputControl");
        this._inputValue = context.parameters.InputFieldToChange.raw || "";
        this._inputElement.value = this._inputValue;
        this._notifyOutputChanged = notifyOutputChanged;
        this._inputElement.addEventListener("blur", this.onBlur);
        container.appendChild(this._inputElement);

        this._inputElement.style.backgroundColor = this._colorInRgb;
        this._inputElement.style.height = `${this._heightInLines * 2.5}rem`;
    }


    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void {
        // Add code to update control view
        this._inputValue = context.parameters.InputFieldToChange.raw || "";
        this._inputElement.value = this._inputValue;

        this._colorInRgb = context.parameters.ColorInRGB.raw || "";
        this._inputElement.style.backgroundColor = this._colorInRgb;

        this._heightInLines = parseInt(context.parameters.HeightInLines.raw || "");
        this._inputElement.style.height = `${this._heightInLines * 2.5}rem`;
        console.log("update wurde ausgeführt");
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return {
            InputFieldToChange: this._inputValue,
        };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}