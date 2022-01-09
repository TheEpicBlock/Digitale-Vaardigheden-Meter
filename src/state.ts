import * as Tests from './tests'
import * as Animate from './animate'
import * as GS from './globalstate'

export interface State {
    toUrlString(): string
    setVisibility(animate: boolean, visibility: boolean): void
    onHtmlMessage(msg: String): void
}

export class StartState implements State {
    type: "start"
    
    constructor() {
    }
    
    toUrlString(): string {
        return "";
    }
    
    setVisibility(animate: boolean, visibility: boolean) {
        Animate.activateOrDeactivateElement(document.getElementById("start"), animate, visibility);
    }
    
    onHtmlMessage(msg: string) {
        GS.switchState(new TestState(Tests.getFirstTest()));
    }
}

export class TestState implements State  {
    type: "test"
    test: Tests.Test
    htmlRep: HTMLElement | null // The Html representation insided the dom
    
    constructor(test: Tests.Test) {
        this.test = test;
        this.htmlRep = null;
    }
    
    toUrlString(): string {
        return "t"+this.test.id;
    }
    
    setVisibility(animate: boolean, visibility: boolean) {
        if (this.htmlRep != null) {
            Animate.activateOrDeactivateElement(this.htmlRep, animate, visibility);
        } else {
            var main = document.getElementById("main");
            
            var testhtml = document.createElement("div");
            var margin = document.createElement("div");
            margin.innerHTML = this.test.html;
            margin.className = "margin-wrapper";
            testhtml.append(margin);
            testhtml.className = "state";
            
            main.append(testhtml);
            Animate.activateOrDeactivateElement(testhtml, animate, visibility);
            this.htmlRep = testhtml;
        }
    }
    
    async onHtmlMessage(msg: string) {
        switch (await this.test.checkConditions(msg)) {
            case Tests.TestResult.Success:
            case Tests.TestResult.QuiteGood:
            case Tests.TestResult.Fail:
                GS.toNextTest();
                break;
            case Tests.TestResult.TryAgain:
                break;
        }
    }
}

export function fromUrlString(str: string): State {
    if (str.startsWith("t") && str.length >= 2) {
        return new TestState(Tests.getById(parseInt(str.substring(1), 16)));
    } else {
        return new StartState();
    }
}
