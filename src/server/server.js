import {Server} from "hapi";
import React from "react";
import Router from "react-router";
import Transmit from "react-transmit";
//import routes from "views/Routes";
import url from "url";
import path from "path";


const server = new Server();
server.connection({port: process.env.PORT || 8000});
server.start(function () {
	console.info("Server is listening");
	console.info(server.info);
	//var x = [1,2,3];
	//x.forEach(s => console.log(s));
	//console.info("==> 🌎  Go to " + server.info.uri.toLowerCase());
});

server.route({
	method: "*",
	path: "/",
	handler: (request, reply) => {
		console.log(request.path);
		reply.file(path.resolve(__dirname, '../client/index.html'));
		//reply.file('../src/client/index.html')
	}
});
