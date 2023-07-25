import { PostStateEnum } from "@nestify/server/util/common";
import { I18nTranslations } from "@nestify/server/util/i18n";
import { IsEnumField, IsStringField, IsUUIDField, ToBoolean } from "@nestify/server/util/nest-framework/validators";
import { IsBoolean } from "class-validator";
import { i18nValidationMessage } from "nestjs-i18n";

export class CreatePostDto {
	/**
	 * Title of post
	 * @example "Lorem ipsum dolor sit"
	 */

	@IsStringField()
	title!: string;

	/**
	 * Description of post
	 * @example "Some paragraph of text"
	 */

	@IsStringField()
	description!: string;

	/**
	 * Content of post
	 * @example "Long paragraph of text"
	 */

	@IsStringField()
	content!: string;

	/**
	 * tags of post
	 * @example ["c84ab664-d9a9-4b00-b412-bc31b50c7c50","c84ab664-d9a9-4b00-b412-bc31b50c7c50"]
	 */

	@IsUUIDField({ each: true })
	tags!: string[];

	/**
	 * tags of post
	 * @example ["c84ab664-d9a9-4b00-b412-bc31b50c7c50","c84ab664-d9a9-4b00-b412-bc31b50c7c50"]
	 */

	@IsUUIDField({ each: true })
	categories!: string[];

	/**
	 * State of post
	 * @example DRAFT
	 */

	@IsEnumField(PostStateEnum, { required: false })
	state: PostStateEnum;

	/**
	 * Published status of post
	 * @example true
	 */
	@ToBoolean()
	@IsBoolean({
		message: i18nValidationMessage<I18nTranslations>("validation.isDataType", {
			type: "boolean",
		}),
	})
	published?: boolean;
}