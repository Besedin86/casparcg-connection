import {JsonObject, JsonMember} from "typedjson-npm";

/**  */
export namespace Config {

	/** */
	export namespace v20x {
		/** */
		export enum VideoMode {
			_PAL,
			_NTSC,
			_576p2500,
			_720p2398,
			_720p2400,
			_720p2500,
			_720p5000,
			_720p2997,
			_720p5994,
			_720p3000,
			_720p6000,
			_1080p2398,
			_1080p2400,
			_1080i5000,
			_1080i5994,
			_1080i6000,
			_1080p2500,
			_1080p2997,
			_1080p3000,
			_1080p5000,
			_1080p5994,
			_1080p6000,
			_1556p2398,
			_1556p2400,
			_1556p2500,
			_dci1080p2398,
			_dci1080p2400,
			_dci1080p2500,
			_2160p2398,
			_2160p2400,
			_2160p2500,
			_2160p2997,
			_2160p3000,
			_dci2160p2398,
			_dci2160p2400,
			_dci2160p2500
		}

		/** */
		export enum ChannelLayout {
			_mono,
			_stereo,
			_dts,
			_dolbye,
			_dolbydigital,
			_smpte,
			_passthru
		}

		/** */
		@JsonObject
		export class Consumer {
			@JsonMember({type: String, isRequired: true})	// @todo: custom "enum"-class for all props
			public type: String;
		}

		/** */
		@JsonObject
		export class DecklinkConsumer extends Consumer {
			type = "decklink";

			@JsonMember({type: Number, isRequired: false})
			public device: number = 1;

			@JsonMember({type: Number, isRequired: false, name: "key-device"})
			public keydevice: Number;

			@JsonMember({type: String, isRequired: false, name: "embedded-audio"})
			public embeddedaudio: string = "false";

			@JsonMember({type: String, isRequired: false, name: "channel-layout"})
			public channellayout: string = "stereo";

			@JsonMember({type: String, isRequired: false})
			public latency: string = "normal";

			@JsonMember({type: String, isRequired: false})
			public keyer: string = "external";

			@JsonMember({type: String, isRequired: false, name: "key-only"})
			public keyonly: string = "false";

			@JsonMember({type: Number, isRequired: false, name: "buffer-depth"})
			public bufferdepth: number = 3;

			@JsonMember({type: String, isRequired: false, name: "custom-allocator"})
			public customallocator: string = "true";	// @todo: ns 2.0 only
		}

		/** */
		@JsonObject
		export class BluefishConsumer extends Consumer {
			type = "Bluefish";

			@JsonMember({type: Number, isRequired: false})
			public device: number = 1;

			@JsonMember({type: String, isRequired: false, name: "embedded-audio"})
			public embeddedaudio: string = "false";

			@JsonMember({type: String, isRequired: false, name: "channel-layout"})
			public channellayout: string = "stereo";

			@JsonMember({type: String, isRequired: false, name: "key-only"})
			public keyonly: string = "false";
		}

		/** */
		@JsonObject
		export class SystemaudioConsumer extends Consumer {
			type: string = "systemaudio";

			@JsonMember({type: String, isRequired: false, name: "channel-layout"})
			public channellayout: string = "stereo";

			@JsonMember({type: Number, isRequired: false})
			public latency: number = 200;
		}

		/** */
		@JsonObject
		export class ScreenConsumer extends Consumer {
			type = "screen";

			@JsonMember({type: Number, isRequired: false})
			public device: number = 0;

			@JsonMember({type: String, isRequired: false, name: "aspect-ratio"})
			public aspectratio: string = "default";

			@JsonMember({type: String, isRequired: false})
			public stretch: string = "fill";

			@JsonMember({type: String, isRequired: false})
			public windowed: string = "true";

			@JsonMember({type: String, isRequired: false, name: "key-only"})
			public keyonly: string = "false";

			@JsonMember({type: String, isRequired: false, name: "auto-deinterlace"})
			public autodeinterlace: string = "true";

			@JsonMember({type: String, isRequired: false})
			public vsync: string = "false";

			@JsonMember({type: String, isRequired: false})
			public borderless: string = "false";

			@JsonMember({type: String, isRequired: false})
			public interactive: string = "true";		// @todo: ns 2.1 only

			@JsonMember({type: String, isRequired: false})
			public name: string = "Screen Consumer";	// @todo: ns 2.0 only
		}

		/** */
		@JsonObject
		export class NewtekivgaConsumer extends Consumer {
			type = "newtekivga";

			@JsonMember({type: String, isRequired: false, name: "channel-layout"})
			public channellayout: string = "stereo";	// @todo: ns 2.0 only

			@JsonMember({type: String, isRequired: false, name: "provide-sync"})
			public providesync: string = "true";		// @todo: ns 2.0 only
		}

		/** */
		@JsonObject
		export class FfmpegConsumer extends Consumer { // @todo: 2.1 ns
			type: string = "ffmpeg";

			@JsonMember({type: String, isRequired: false})
			public path: String;

			@JsonMember({type: String, isRequired: false})
			public args: String;

			@JsonMember({type: String, isRequired: false, name: "separate-key"})
			public separatekey: string = "false";

			@JsonMember({type: String, isRequired: false, name: "mono-streams"})
			public monostreams: string = "false";
		}

		/** */
		@JsonObject
		export class FileConsumer extends Consumer { // @todo: 2.0 ns
			type: string = "file";

			@JsonMember({type: String, isRequired: false})
			public path: String;

			@JsonMember({type: String, isRequired: false})
			public vcodec: string = "libx264";

			@JsonMember({type: String, isRequired: false, name: "separate-key"})
			public separatekey: string = "false";
		}

		/** */
		@JsonObject
		export class StreamConsumer extends Consumer { // @todo: 2.0 ns
			type = "stream";

			@JsonMember({type: String, isRequired: false})
			public path: String;

			@JsonMember({type: String, isRequired: false})
			public args: String;
		}

		/** */
		@JsonObject
		export class SynctoConsumer extends Consumer { // @todo: 2.1 ns
			type: string = "syncto";

			@JsonMember({type: Number, isRequired: false, name: "channel-id"})
			public channelid: Number;
		}

		/** */
		@JsonObject
		export class Channel {
			consumers?: Array<Consumer> = [];

			@JsonMember({type: String, isRequired: true, name: "video-mode"})	// @todo: custom "enum"-class
			videoMode: string = "PAL";

			@JsonMember({type: String, name: "straight-alpha-output"})
			straightAlphaOutput?: string = "false";

			@JsonMember({type: Array, elements: Object, isRequired: true, name: "consumers"})
			public get _consumers(): Array<Object> {
				return this.consumers || [];
			}

			/** */
			public set _consumers(consumers: Array<Object>) {
				consumers.forEach((i: Object) => {
					if (i.hasOwnProperty("type")) {
						let className: string = i["type"];
						className = className.replace(/-/, "");
						className = className.charAt(0).toUpperCase() + className.slice(1) + "Consumer";
						if (v20x[className]) {
							let consumer: Consumer = new v20x[className]();
							for (let key in i) {
								key = key.replace(/-/, "");
								if (!i.hasOwnProperty(key)) {
									continue;
								}
								if (consumer.hasOwnProperty(key)) {
									consumer[key] = i[key];
								}
							}
							this.consumers!.push(consumer);
						}
					}
				});
			}
		}
	}

	/** */
	export namespace v207 {
		/** */
		@JsonObject
		export class Paths {
			@JsonMember({type: String, name: "media-path"})
			mediaPath: string = "media\\";

			@JsonMember({type: String, name: "log-path"})
			logPath: string = "log\\";

			@JsonMember({type: String, name: "data-path"})
			dataPath: string = "data\\";

			@JsonMember({type: String, name: "template-path"})
			templatePath: string = "templates\\";

			@JsonMember({type: String, name: "thumbnails-path"})
			thumbnailsPath: string = "thumbnails\\";
		};

		/** */
		@JsonObject
		export class Channel extends v20x.Channel {
			@JsonMember({type: String, name: "channel-layout"})		// @todo: custom "enum"-class
			channellayout?: string = "stereo";
		}
	}

	/** */
	export namespace v21x {
		/** */
		@JsonObject
		export class Paths {
			@JsonMember({type: String, name: "media-path"})
			mediaPath: string = "media/";

			@JsonMember({type: String, name: "log-path"})
			logPath: string = "log/";

			@JsonMember({type: String, name: "data-path"})
			dataPath: string = "data/";

			@JsonMember({type: String, name: "template-path"})
			templatePath: string = "template/";

			@JsonMember({type: String, name: "thumbnail-path"})
			thumbnailPath: string = "thumbnail/";

			@JsonMember({type: String, name: "font-path"})
			fontPath: string = "font/";
		};

		/** */
		@JsonObject
		export class Channel extends v20x.Channel {
			@JsonMember({type: String, name: "channel-layout"})		// @todo: custom "enum"-class
			channellayout?: string = "stereo";
		};

		/** */
		export enum ChannelLayout {
			_mono,
			_stereo,
			_matrix,
			_film,
			_smpte,
			_ebu_r123_8a,
			_ebu_r123_8b,
			_8ch,
			_16ch
		}
	}


	/** */
	export namespace v210 {
		/** */
		@JsonObject
		export class Paths extends v21x.Paths {

		}
	}

	/**  */
	const defaultChannel_207: v207.Channel = {videoMode: "PAL", _consumers: []};
	const defaultChannel_21x: v21x.Channel = {videoMode: "PAL", _consumers: []};

	/**  */
	export interface IConfig20x {
	}

	/**  */
	export interface IConfig21x extends IConfig20x {
		paths: v210.Paths;

	}

	/**  */
	export interface IConfig207 extends IConfig20x {
		paths: v207.Paths;
		channels: Array<v207.Channel>;
	}

	/**  */
	export interface IConfig210 extends IConfig21x {
		channels: Array<v21x.Channel>;
	}

	/** */
	@JsonObject
	export class Config207 implements IConfig207 {
		@JsonMember({type: v207.Paths, isRequired: true})
		public paths: v207.Paths = new v207.Paths();
		@JsonMember({type: Array, elements: v207.Channel, isRequired: true})
		public channels: Array<v207.Channel> = [defaultChannel_207];
	}

	/**  */
	export class Config210 implements IConfig210 {
		@JsonMember({type: v210.Paths, isRequired: true})
		public paths: v210.Paths = new v210.Paths();
		@JsonMember({type: Array, elements: v21x.Channel, isRequired: true})
		public channels: Array<v21x.Channel> = [defaultChannel_21x];
	}
}