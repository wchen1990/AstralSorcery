function initializeCoreMod() {
    return {
        'add_player_field': {
            'target': {
                'type': 'CLASS',
                'name': 'net.minecraft.entity.ai.attributes.AbstractAttributeMap'
            },
            'transformer': function(classNode) {
                print('[AstralSorcery] Adding \'add_player_field\' ASM patch...');

                var ASMAPI = Java.type('net.minecraftforge.coremod.api.ASMAPI');
                var Opcodes = Java.type('org.objectweb.asm.Opcodes');
                var FieldNode = Java.type('org.objectweb.asm.tree.FieldNode');

                var playerField = new FieldNode(Opcodes.ACC_PUBLIC, 'as_entity', 'Lnet/minecraft/entity/LivingEntity;', '', null);
                classNode.fields.add(playerField);

                print('[AstralSorcery] Added \'add_player_field\' ASM patch!');
                return classNode;
            }
        }
    }
}