import { Pipe, PipeTransform } from "@angular/core";
import { Post } from "./model/post";

@Pipe({
    name: 'ObjToArray'
})

export class ObjToArrayPipe implements PipeTransform{
    transform(object: any = []): any {
        return Object.values(object)
    }
}