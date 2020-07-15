"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoModule = void 0;
const common_1 = require("@nestjs/common");
const crypto_service_1 = require("./crypto.service");
const sha256_1 = require("./providers/sha256");
let CryptoModule = class CryptoModule {
};
CryptoModule = __decorate([
    common_1.Module({
        providers: [crypto_service_1.CryptoService, sha256_1.Sha256],
        exports: [crypto_service_1.CryptoService],
    })
], CryptoModule);
exports.CryptoModule = CryptoModule;
