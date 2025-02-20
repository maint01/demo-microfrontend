package com.microfrontend.demo.resources;

import com.microfrontend.demo.dto.Config;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@CrossOrigin("*")
@RestController
@RequestMapping("/configs")
public class ApiController {
    private final List<Config> configs = new ArrayList<>();

    @GetMapping
    public ResponseEntity<List<Config>> list() {
        return ResponseEntity.ok(configs);
    }

    @PostMapping
    public ResponseEntity<List<Config>> create(@RequestBody Config config) {
        config.setId(UUID.randomUUID());
        configs.add(config);
        return ResponseEntity.ok(configs);
    }

    @PutMapping
    public ResponseEntity<List<Config>> update(@RequestBody Config config) {
        config.setId(UUID.randomUUID());
        configs.forEach(config1 -> {
            if (config1.getId().equals(config.getId())) {
                config1.setExposedModule(config.getExposedModule());
                config1.setModulePath(config.getModulePath());
                config1.setRemoteEntry(config.getRemoteEntry());
                config1.setModuleName(config.getModuleName());
            }
        });
        return ResponseEntity.ok(configs);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Config>> remove(@PathVariable UUID id) {
        configs.removeIf(config -> config.getId().equals(id));
        return ResponseEntity.ok(configs);
    }
}
