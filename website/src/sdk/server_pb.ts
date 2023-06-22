// Generated by protoc-gen-grpc-ts-web. DO NOT EDIT!
/* eslint-disable */
/* tslint:disable */

import * as jspb from 'google-protobuf';
import * as grpcWeb from 'grpc-web';

import * as googleProtobufWrappers from 'google-protobuf/google/protobuf/wrappers_pb';
import * as googleProtobufDuration from 'google-protobuf/google/protobuf/duration_pb';

export class Server {

	private client_ = new grpcWeb.GrpcWebClientBase({
		format: 'text',
	});

	private methodInfoInfo = new grpcWeb.MethodDescriptor<InfoReq, InfoRes>(
		"Info",
		null,
		InfoReq,
		InfoRes,
		(req: InfoReq) => req.serializeBinary(),
		InfoRes.deserializeBinary
	);

	constructor(
		private hostname: string,
		private defaultMetadata?: () => grpcWeb.Metadata,
	) { }

	info(req: InfoReq.AsObject, metadata?: grpcWeb.Metadata): Promise<InfoRes.AsObject> {
		return new Promise((resolve, reject) => {
			const message = InfoReqFromObject(req);
			this.client_.rpcCall(
				this.hostname + '/proto.Server/Info',
				message,
				Object.assign({}, this.defaultMetadata ? this.defaultMetadata() : {}, metadata),
				this.methodInfoInfo,
				(err: grpcWeb.Error, res: InfoRes) => {
					if (err) {
						reject(err);
					} else {
						resolve(res.toObject());
					}
				},
			);
		});
	}

}




export declare namespace InfoReq {
	export type AsObject = {
	}
}

export class InfoReq extends jspb.Message {

	private static repeatedFields_ = [
		
	];

	constructor(data?: jspb.Message.MessageArray) {
		super();
		jspb.Message.initialize(this, data || [], 0, -1, InfoReq.repeatedFields_, null);
	}


	serializeBinary(): Uint8Array {
		const writer = new jspb.BinaryWriter();
		InfoReq.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}

	toObject(): InfoReq.AsObject {
		let f: any;
		return {
		};
	}

	static serializeBinaryToWriter(message: InfoReq, writer: jspb.BinaryWriter): void {
	}

	static deserializeBinary(bytes: Uint8Array): InfoReq {
		var reader = new jspb.BinaryReader(bytes);
		var message = new InfoReq();
		return InfoReq.deserializeBinaryFromReader(message, reader);
	}

	static deserializeBinaryFromReader(message: InfoReq, reader: jspb.BinaryReader): InfoReq {
		while (reader.nextField()) {
			if (reader.isEndGroup()) {
				break;
			}
			const field = reader.getFieldNumber();
			switch (field) {
			default:
				reader.skipField();
				break;
			}
		}
		return message;
	}

}
export declare namespace InfoRes {
	export type AsObject = {
		publicKey: string,
		host?: googleProtobufWrappers.StringValue.AsObject,
		port: number,
		hostVpnIp: string,
		metadataEnabled: boolean,
		isAdmin: boolean,
		allowedIps: string,
		dnsEnabled: boolean,
		dnsAddress: string,
		filename: string,
		inactiveDeviceDeletionEnabled: boolean,
		inactiveDeviceGracePeriod?: googleProtobufDuration.Duration.AsObject,
		clientConfigDnsServers: string,
		clientConfigDnsSearchDomain: string,
	}
}

export class InfoRes extends jspb.Message {

	private static repeatedFields_ = [
		
	];

	constructor(data?: jspb.Message.MessageArray) {
		super();
		jspb.Message.initialize(this, data || [], 0, -1, InfoRes.repeatedFields_, null);
	}


	getPublicKey(): string {return jspb.Message.getFieldWithDefault(this, 1, "");
	}

	setPublicKey(value: string): void {
		(jspb.Message as any).setProto3StringField(this, 1, value);
	}

	getHost(): googleProtobufWrappers.StringValue {
		return jspb.Message.getWrapperField(this, googleProtobufWrappers.StringValue, 2);
	}

	setHost(value?: googleProtobufWrappers.StringValue): void {
		(jspb.Message as any).setWrapperField(this, 2, value);
	}

	getPort(): number {return jspb.Message.getFieldWithDefault(this, 3, 0);
	}

	setPort(value: number): void {
		(jspb.Message as any).setProto3IntField(this, 3, value);
	}

	getHostVpnIp(): string {return jspb.Message.getFieldWithDefault(this, 4, "");
	}

	setHostVpnIp(value: string): void {
		(jspb.Message as any).setProto3StringField(this, 4, value);
	}

	getMetadataEnabled(): boolean {return jspb.Message.getFieldWithDefault(this, 5, false);
	}

	setMetadataEnabled(value: boolean): void {
		(jspb.Message as any).setProto3BooleanField(this, 5, value);
	}

	getIsAdmin(): boolean {return jspb.Message.getFieldWithDefault(this, 6, false);
	}

	setIsAdmin(value: boolean): void {
		(jspb.Message as any).setProto3BooleanField(this, 6, value);
	}

	getAllowedIps(): string {return jspb.Message.getFieldWithDefault(this, 7, "");
	}

	setAllowedIps(value: string): void {
		(jspb.Message as any).setProto3StringField(this, 7, value);
	}

	getDnsEnabled(): boolean {return jspb.Message.getFieldWithDefault(this, 8, false);
	}

	setDnsEnabled(value: boolean): void {
		(jspb.Message as any).setProto3BooleanField(this, 8, value);
	}

	getDnsAddress(): string {return jspb.Message.getFieldWithDefault(this, 9, "");
	}

	setDnsAddress(value: string): void {
		(jspb.Message as any).setProto3StringField(this, 9, value);
	}

	getFilename(): string {return jspb.Message.getFieldWithDefault(this, 10, "");
	}

	setFilename(value: string): void {
		(jspb.Message as any).setProto3StringField(this, 10, value);
	}

	getInactiveDeviceDeletionEnabled(): boolean {return jspb.Message.getFieldWithDefault(this, 11, false);
	}

	setInactiveDeviceDeletionEnabled(value: boolean): void {
		(jspb.Message as any).setProto3BooleanField(this, 11, value);
	}

	getInactiveDeviceGracePeriod(): googleProtobufDuration.Duration {
		return jspb.Message.getWrapperField(this, googleProtobufDuration.Duration, 12);
	}

	setInactiveDeviceGracePeriod(value?: googleProtobufDuration.Duration): void {
		(jspb.Message as any).setWrapperField(this, 12, value);
	}

	getClientConfigDnsServers(): string {return jspb.Message.getFieldWithDefault(this, 13, "");
	}

	setClientConfigDnsServers(value: string): void {
		(jspb.Message as any).setProto3StringField(this, 13, value);
	}

	getClientConfigDnsSearchDomain(): string {return jspb.Message.getFieldWithDefault(this, 14, "");
	}

	setClientConfigDnsSearchDomain(value: string): void {
		(jspb.Message as any).setProto3StringField(this, 14, value);
	}

	serializeBinary(): Uint8Array {
		const writer = new jspb.BinaryWriter();
		InfoRes.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}

	toObject(): InfoRes.AsObject {
		let f: any;
		return {
			publicKey: this.getPublicKey(),
			host: (f = this.getHost()) && f.toObject(),
			port: this.getPort(),
			hostVpnIp: this.getHostVpnIp(),
			metadataEnabled: this.getMetadataEnabled(),
			isAdmin: this.getIsAdmin(),
			allowedIps: this.getAllowedIps(),
			dnsEnabled: this.getDnsEnabled(),
			dnsAddress: this.getDnsAddress(),
			filename: this.getFilename(),
			inactiveDeviceDeletionEnabled: this.getInactiveDeviceDeletionEnabled(),
			inactiveDeviceGracePeriod: (f = this.getInactiveDeviceGracePeriod()) && f.toObject(),
			clientConfigDnsServers: this.getClientConfigDnsServers(),
			clientConfigDnsSearchDomain: this.getClientConfigDnsSearchDomain(),
		};
	}

	static serializeBinaryToWriter(message: InfoRes, writer: jspb.BinaryWriter): void {
		const field1 = message.getPublicKey();
		if (field1.length > 0) {
			writer.writeString(1, field1);
		}
		const field2 = message.getHost();
		if (field2 != null) {
			writer.writeMessage(2, field2, googleProtobufWrappers.StringValue.serializeBinaryToWriter);
		}
		const field3 = message.getPort();
		if (field3 != 0) {
			writer.writeInt32(3, field3);
		}
		const field4 = message.getHostVpnIp();
		if (field4.length > 0) {
			writer.writeString(4, field4);
		}
		const field5 = message.getMetadataEnabled();
		if (field5 != false) {
			writer.writeBool(5, field5);
		}
		const field6 = message.getIsAdmin();
		if (field6 != false) {
			writer.writeBool(6, field6);
		}
		const field7 = message.getAllowedIps();
		if (field7.length > 0) {
			writer.writeString(7, field7);
		}
		const field8 = message.getDnsEnabled();
		if (field8 != false) {
			writer.writeBool(8, field8);
		}
		const field9 = message.getDnsAddress();
		if (field9.length > 0) {
			writer.writeString(9, field9);
		}
		const field10 = message.getFilename();
		if (field10.length > 0) {
			writer.writeString(10, field10);
		}
		const field11 = message.getInactiveDeviceDeletionEnabled();
		if (field11 != false) {
			writer.writeBool(11, field11);
		}
		const field12 = message.getInactiveDeviceGracePeriod();
		if (field12 != null) {
			writer.writeMessage(12, field12, googleProtobufDuration.Duration.serializeBinaryToWriter);
		}
		const field13 = message.getClientConfigDnsServers();
		if (field13.length > 0) {
			writer.writeString(13, field13);
		}
		const field14 = message.getClientConfigDnsSearchDomain();
		if (field14.length > 0) {
			writer.writeString(14, field14);
		}
	}

	static deserializeBinary(bytes: Uint8Array): InfoRes {
		var reader = new jspb.BinaryReader(bytes);
		var message = new InfoRes();
		return InfoRes.deserializeBinaryFromReader(message, reader);
	}

	static deserializeBinaryFromReader(message: InfoRes, reader: jspb.BinaryReader): InfoRes {
		while (reader.nextField()) {
			if (reader.isEndGroup()) {
				break;
			}
			const field = reader.getFieldNumber();
			switch (field) {
			case 1:
				const field1 = reader.readString()
				message.setPublicKey(field1);
				break;
			case 2:
				const field2 = new googleProtobufWrappers.StringValue();
				reader.readMessage(field2, googleProtobufWrappers.StringValue.deserializeBinaryFromReader);
				message.setHost(field2);
				break;
			case 3:
				const field3 = reader.readInt32()
				message.setPort(field3);
				break;
			case 4:
				const field4 = reader.readString()
				message.setHostVpnIp(field4);
				break;
			case 5:
				const field5 = reader.readBool()
				message.setMetadataEnabled(field5);
				break;
			case 6:
				const field6 = reader.readBool()
				message.setIsAdmin(field6);
				break;
			case 7:
				const field7 = reader.readString()
				message.setAllowedIps(field7);
				break;
			case 8:
				const field8 = reader.readBool()
				message.setDnsEnabled(field8);
				break;
			case 9:
				const field9 = reader.readString()
				message.setDnsAddress(field9);
				break;
			case 10:
				const field10 = reader.readString()
				message.setFilename(field10);
				break;
			case 11:
				const field11 = reader.readBool()
				message.setInactiveDeviceDeletionEnabled(field11);
				break;
			case 12:
				const field12 = new googleProtobufDuration.Duration();
				reader.readMessage(field12, googleProtobufDuration.Duration.deserializeBinaryFromReader);
				message.setInactiveDeviceGracePeriod(field12);
				break;
			case 13:
				const field13 = reader.readString()
				message.setClientConfigDnsServers(field13);
				break;
			case 14:
				const field14 = reader.readString()
				message.setClientConfigDnsSearchDomain(field14);
				break;
			default:
				reader.skipField();
				break;
			}
		}
		return message;
	}

}


function InfoReqFromObject(obj: InfoReq.AsObject | undefined): InfoReq | undefined {
	if (obj === undefined) {
		return undefined;
	}
	const message = new InfoReq();
	return message;
}

function InfoResFromObject(obj: InfoRes.AsObject | undefined): InfoRes | undefined {
	if (obj === undefined) {
		return undefined;
	}
	const message = new InfoRes();
	message.setPublicKey(obj.publicKey);
	message.setHost(StringValueFromObject(obj.host));
	message.setPort(obj.port);
	message.setHostVpnIp(obj.hostVpnIp);
	message.setMetadataEnabled(obj.metadataEnabled);
	message.setIsAdmin(obj.isAdmin);
	message.setAllowedIps(obj.allowedIps);
	message.setDnsEnabled(obj.dnsEnabled);
	message.setDnsAddress(obj.dnsAddress);
	message.setFilename(obj.filename);
	message.setInactiveDeviceDeletionEnabled(obj.inactiveDeviceDeletionEnabled);
	message.setInactiveDeviceGracePeriod(DurationFromObject(obj.inactiveDeviceGracePeriod));
	message.setClientConfigDnsServers(obj.clientConfigDnsServers);
	message.setClientConfigDnsSearchDomain(obj.clientConfigDnsSearchDomain);
	return message;
}

function StringValueFromObject(obj: googleProtobufWrappers.StringValue.AsObject | undefined): googleProtobufWrappers.StringValue | undefined {
	if (obj === undefined) {
		return undefined;
	}
	const message = new googleProtobufWrappers.StringValue();
	message.setValue(obj.value);
	return message;
}

function DurationFromObject(obj: googleProtobufDuration.Duration.AsObject | undefined): googleProtobufDuration.Duration | undefined {
	if (obj === undefined) {
		return undefined;
	}
	const message = new googleProtobufDuration.Duration();
	message.setSeconds(obj.seconds);
	message.setNanos(obj.nanos);
	return message;
}

