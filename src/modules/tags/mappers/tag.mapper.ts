import type { Tag } from "@/modules/tags/interfaces/tag.interface";
import type { TagResponse } from "@/modules/tags/interfaces/tag.response";


export class TagMapper {
  static fromResponseToTag(tag: TagResponse): Tag {
    return {
      id       : tag.id,
      name     : tag.name,
      isActive : tag.isActive
    }
  }
}