package com.microfrontend.demo.dto;


import java.util.UUID;


public class Config {
    java.util.UUID id;
    String modulePath; // duong dẫn trong ứng dụng shell
    String moduleName; // Ten module
    String type; // 'module' | 'script'
    String remoteEntry; // 'http://host:port/remoteEntry.js' | (host: của MFE, port: portal của MFE) hoặc domain
    String exposedModule; // '/.Module-x'

    public Config() {
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getRemoteEntry() {
        return remoteEntry;
    }

    public void setRemoteEntry(String remoteEntry) {
        this.remoteEntry = remoteEntry;
    }

    public String getModuleName() {
        return moduleName;
    }

    public void setModuleName(String moduleName) {
        this.moduleName = moduleName;
    }

    public String getExposedModule() {
        return exposedModule;
    }

    public void setExposedModule(String exposedModule) {
        this.exposedModule = exposedModule;
    }

    public String getModulePath() {
        return modulePath;
    }

    public void setModulePath(String modulePath) {
        this.modulePath = modulePath;
    }
}
