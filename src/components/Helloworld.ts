import { Component, Vue, Prop} from "vue-property-decorator";
import WithRender from "./helloworld.html";

@WithRender
@Component

export default class Helloworld extends Vue{
    @Prop() public msg = 'I am using TypeScript classes with Vue!';
}